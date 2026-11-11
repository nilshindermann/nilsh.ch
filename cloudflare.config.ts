import { bindings, defineConfig, defineWorker } from 'cf/config';

export default defineConfig({
    worker: defineWorker({
        name: 'nilsh',
        entrypoint: 'vinext/server/fetch-handler',
        compatibilityDate: '2026-11-11',
        workersDev: false,
        observability: {
            enabled: true,
            logs: { enabled: true, persist: true, invocationLogs: true },
        },
        assets: {
            htmlHandling: 'none',
            notFoundHandling: 'none',
            runWorkerFirst: ['/*', '!/_next/static/*', '!/*/_next/static/*'],
        },
        env: {
            ASSETS: bindings.assets(),
            ENVIRONMENT: bindings.text('production'),
        },
    }),
});
