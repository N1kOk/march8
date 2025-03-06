import { kateConfig } from '@/configs/kate.ts'
import { mumConfig } from '@/configs/mum.ts'
import { soplyakConfig } from '@/configs/soplyak.ts'

export type ConfigsKey = keyof typeof configs

export const configs = {
  kate: kateConfig,
  mum: mumConfig,
  soplyak: soplyakConfig,
} as const