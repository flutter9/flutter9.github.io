// ignore_for_file: directives_ordering

import 'package:build_runner_core/build_runner_core.dart' as _i1;
import 'package:json_serializable/builder.dart' as _i2;
import 'package:source_gen/builder.dart' as _i3;
import 'package:build_modules/builders.dart' as _i4;
import 'package:build_web_compilers/builders.dart' as _i5;
import 'package:build_config/build_config.dart' as _i6;
import 'package:build/build.dart' as _i7;
import 'package:sass_builder/sass_builder.dart' as _i8;
import 'dart:isolate' as _i9;
import 'package:build_runner/build_runner.dart' as _i10;
import 'dart:io' as _i11;

final _builders = <_i1.BuilderApplication>[
  _i1.apply('json_serializable:json_serializable', [_i2.jsonSerializable],
      _i1.toDependentsOf('json_serializable'),
      hideOutput: true, appliesBuilders: ['source_gen:combining_builder']),
  _i1.apply('source_gen:combining_builder', [_i3.combiningBuilder],
      _i1.toNoneByDefault(),
      hideOutput: false, appliesBuilders: ['source_gen:part_cleanup']),
  _i1.apply('build_modules:module_library', [_i4.moduleLibraryBuilder],
      _i1.toAllPackages(),
      isOptional: true,
      hideOutput: true,
      appliesBuilders: ['build_modules:module_cleanup']),
  _i1.apply(
      'build_web_compilers:dart2js_modules',
      [
        _i5.dart2jsMetaModuleBuilder,
        _i5.dart2jsMetaModuleCleanBuilder,
        _i5.dart2jsModuleBuilder
      ],
      _i1.toNoneByDefault(),
      isOptional: true,
      hideOutput: true,
      appliesBuilders: ['build_modules:module_cleanup']),
  _i1.apply(
      'build_web_compilers:ddc_modules',
      [
        _i5.ddcMetaModuleBuilder,
        _i5.ddcMetaModuleCleanBuilder,
        _i5.ddcModuleBuilder
      ],
      _i1.toNoneByDefault(),
      isOptional: true,
      hideOutput: true,
      appliesBuilders: ['build_modules:module_cleanup']),
  _i1.apply('build_web_compilers:ddc', [_i5.ddcKernelBuilder, _i5.ddcBuilder],
      _i1.toAllPackages(),
      isOptional: true,
      hideOutput: true,
      appliesBuilders: [
        'build_web_compilers:ddc_modules',
        'build_web_compilers:dart2js_modules',
        'build_web_compilers:dart_source_cleanup'
      ]),
  _i1.apply('build_web_compilers:sdk_js_copy', [_i5.sdkJsCopyBuilder],
      _i1.toNoneByDefault(),
      hideOutput: true,
      appliesBuilders: ['build_web_compilers:sdk_js_cleanup']),
  _i1.apply('build_web_compilers:entrypoint', [_i5.webEntrypointBuilder],
      _i1.toRoot(),
      hideOutput: true,
      defaultGenerateFor: const _i6.InputSet(include: [
        'web/**',
        'test/**.dart.browser_test.dart',
        'example/**',
        'benchmark/**'
      ], exclude: [
        'test/**.node_test.dart',
        'test/**.vm_test.dart'
      ]),
      defaultOptions: _i7.BuilderOptions({
        'dart2js_args': ['--minify']
      }),
      defaultDevOptions: _i7.BuilderOptions({
        'dart2js_args': ['--enable-asserts']
      }),
      defaultReleaseOptions: _i7.BuilderOptions({'compiler': 'dart2js'}),
      appliesBuilders: ['build_web_compilers:dart2js_archive_extractor']),
  _i1.apply('sass_builder:sass_builder', [_i8.sassBuilder],
      _i1.toDependentsOf('sass_builder'),
      hideOutput: true,
      defaultReleaseOptions: _i7.BuilderOptions({'outputStyle': 'compressed'}),
      appliesBuilders: ['sass_builder:sass_source_cleanup']),
  _i1.applyPostProcess(
      'sass_builder:sass_source_cleanup', _i8.sassSourceCleanup,
      defaultReleaseOptions: _i7.BuilderOptions({'enabled': true}),
      defaultGenerateFor: const _i6.InputSet()),
  _i1.applyPostProcess('source_gen:part_cleanup', _i3.partCleanup,
      defaultGenerateFor: const _i6.InputSet()),
  _i1.applyPostProcess('build_modules:module_cleanup', _i4.moduleCleanup,
      defaultGenerateFor: const _i6.InputSet()),
  _i1.applyPostProcess('build_web_compilers:dart2js_archive_extractor',
      _i5.dart2jsArchiveExtractor,
      defaultReleaseOptions: _i7.BuilderOptions({'filter_outputs': true}),
      defaultGenerateFor: const _i6.InputSet()),
  _i1.applyPostProcess(
      'build_web_compilers:dart_source_cleanup', _i5.dartSourceCleanup,
      defaultReleaseOptions: _i7.BuilderOptions({'enabled': true}),
      defaultGenerateFor: const _i6.InputSet()),
  _i1.applyPostProcess(
      'build_web_compilers:sdk_js_cleanup', _i5.sdkJsCleanupBuilder,
      defaultReleaseOptions: _i7.BuilderOptions({'enabled': true}),
      defaultGenerateFor: const _i6.InputSet())
];
void main(List<String> args, [_i9.SendPort sendPort]) async {
  var result = await _i10.run(args, _builders);
  sendPort?.send(result);
  _i11.exitCode = result;
}
