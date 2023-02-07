import ElementUi from "element-plus"
import 'element-plus/dist/index.css'

import type { App } from "vue";

export function setupElementUI(app: App) {
  app.use(ElementUi)
}
