import * as path from 'node:path'

import { validateThemePluginGrowiDirective } from '@growi/pluginkit/dist/v4/server'

describe('package.json', () => {
  test('should pass validation', () => {
    // when
    const projectDirRoot = path.resolve(__dirname, '..')
    const result = validateThemePluginGrowiDirective(projectDirRoot)

    // then
    expect(result.themes.length).toBeGreaterThan(0)
  })
})
