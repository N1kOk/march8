import '@/main.css'
import { configs, ConfigsKey } from '@/configs'

init()

function init() {
  let configName = new URL(location.href).searchParams.get('config') as ConfigsKey

  if (import.meta.env.DEV && !configName) {
    configName = 'kate'
  } else if (!(configName in configs)) {
    return alert('Конфигурация не определена')
  }

  const config = configs[configName]

  for (const [key, value] of Object.entries(config)) {
    document.querySelector(`#${key}`)!.textContent = value
  }
}
