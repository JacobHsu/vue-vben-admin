import type { SupportedLanguagesType } from '@vben-core/typings';

export type Locale = SupportedLanguagesType;

export const messages: Partial<Record<Locale, Record<string, string>>> = {
  'en-US': {
    cancel: 'Cancel',
    collapse: 'Collapse',
    confirm: 'Confirm',
    expand: 'Expand',
    prompt: 'Prompt',
    reset: 'Reset',
    submit: 'Submit',
    toggleSidebar: 'Toggle sidebar',
    confirmTitle: 'Please Confirm',
  },
  'zh-CN': {
    cancel: '取消',
    collapse: '收起',
    confirm: '确认',
    expand: '展开',
    prompt: '提示',
    reset: '重置',
    submit: '提交',
    toggleSidebar: '切换侧边栏',
    confirmTitle: '请确认',
  },
  'zh-TW': {
    cancel: '取消',
    collapse: '收起',
    confirm: '確認',
    expand: '展開',
    prompt: '提示',
    reset: '重設',
    submit: '提交',
    toggleSidebar: '切換側邊欄',
    confirmTitle: '請確認',
  },
};

export const getMessages = (locale: Locale) =>
  messages[locale] ?? messages['en-US'] ?? {};
