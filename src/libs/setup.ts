import { setupElementUI } from "./setupElementUi";

export function setup(app: App) {
  [
    setupElementUI,
  ].forEach(
    (_) => _(app)
  )
}
