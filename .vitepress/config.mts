import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: "docs",

  title: "CNAP",
  description: "Cloud Native Agent Platform - Discord 기반 AI 에이전트 플랫폼",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/cnap-logo.png",

    nav: [
      { text: "홈", link: "/" },
      { text: "시작하기", link: "/getting-started" },
      { text: "사용자 가이드", link: "/user-guide" },
      { text: "프로젝트 소개", link: "/introduction" },
    ],

    sidebar: [
      {
        text: "소개",
        items: [
          { text: "프로젝트 소개", link: "/introduction" },
          { text: "기존 서비스 문제점", link: "/problem-statement" },
          { text: "기대효과", link: "/benefits" },
        ],
      },
      {
        text: "시작하기",
        items: [
          { text: "설치 및 실행", link: "/getting-started" },
          { text: "Discord 연동", link: "/discord-integration" },
        ],
      },
      {
        text: "사용 가이드",
        items: [{ text: "에이전트 관리", link: "/user-guide" }],
      },
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/cnap-oss/app" }],

    footer: {
      message: "MIT 라이선스로 공개된 오픈소스 프로젝트입니다.",
      copyright: "Copyright © 2025 CNAP Team",
    },

    search: {
      provider: "local",
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: "검색",
                buttonAriaLabel: "검색",
              },
              modal: {
                noResultsText: "결과를 찾을 수 없습니다",
                resetButtonTitle: "초기화",
                footer: {
                  selectText: "선택",
                  navigateText: "이동",
                  closeText: "닫기",
                },
              },
            },
          },
        },
      },
    },

    outline: {
      label: "목차",
      level: [2, 3],
    },

    docFooter: {
      prev: "이전",
      next: "다음",
    },

    lastUpdated: {
      text: "마지막 업데이트",
    },
  },
});
