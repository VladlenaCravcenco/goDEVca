import {defineCliConfig} from 'sanity/cli'

export default defineConfig({
  name: 'default',
  title: 'studio',
  projectId: '4yokwa9c',
  dataset: 'production',
  basePath: '/', // <-- добавь
  plugins: [structureTool(), visionTool()],
  schema: { types: schemaTypes },
})
