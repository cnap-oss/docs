---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "CNAP"
  text: "Cloud Native Agent Platform"
  tagline: Discord 기반 AI 에이전트 생성·관리·실행 플랫폼
  image:
    src: /cnap-logo.png
    alt: CNAP Logo
  actions:
    - theme: brand
      text: 시작하기
      link: /getting-started
    - theme: alt
      text: 프로젝트 소개
      link: /introduction

features:
  - title: 🤖 Discord 기반 AI 협업
    details: 익숙한 Discord 메신저에서 슬래시 명령어로 AI 에이전트를 생성하고 관리합니다. 별도 학습 없이 팀원 모두가 쉽게 참여할 수 있습니다.
  - title: 📁 개인 파일 안전 연결
    details: 개인 컴퓨터의 파일과 폴더를 AI와 안전하게 연결합니다. 복잡한 벡터 DB나 MCP 설정 없이 간편하게 활용할 수 있습니다.
  - title: 🔒 격리된 실행 환경
    details: Docker 컨테이너 기반의 격리된 환경에서 에이전트를 실행하여 보안을 강화하고 시스템을 보호합니다.
  - title: 🌍 어디서나 접근 가능
    details: Discord 초대 링크만으로 PC와 모바일 어디서든 동일한 AI 에이전트 환경에 접근할 수 있습니다.
  - title: ⚡ 간편한 설정
    details: 복잡한 DevOps 지식 없이도 AI 에이전트를 실행할 수 있습니다. 환경 구성이 단순하고 직관적입니다.
  - title: 🔧 자동화된 워크플로우
    details: GitHub, Jira 등 외부 도구와 연동하여 프로젝트 이벤트를 자동으로 분석하고 요약합니다.
---

## 왜 CNAP인가?

현재 AI 서비스는 많이 사용되고 있지만, 실제 사용 환경에서는 여러 불편한 점이 있습니다:

- **개인 파일 활용의 어려움**: 웹 기반 AI는 로컬 파일을 바로 활용하기 힘듭니다
- **장소와 기기의 제약**: 특정 기기에서만 AI를 활용할 수 있습니다
- **복잡한 환경 구성**: 안전한 AI 에이전트 실행에는 높은 기술적 지식이 필요합니다
- **분리된 협업 환경**: 실제 작업은 메신저에서 하지만 AI는 별도 서비스를 사용합니다

**CNAP은 이러한 문제를 해결합니다.** 자주 사용하는 Discord 메신저에서 개인 파일을 안전하게 연결하고, 복잡한 설정 없이 AI 에이전트를 실행할 수 있는 환경을 제공합니다.

## 주요 사용 흐름

1. **환경 준비**: 필수 도구를 설치하고 소스 코드를 빌드합니다
2. **설정 및 실행**: 환경변수를 구성하고 CNAP을 실행합니다
3. **Discord 연동**: 봇 토큰으로 Discord와 연결하고 서버에 초대합니다
4. **에이전트 활용**: Discord에서 명령어로 에이전트를 생성하고 대화를 시작합니다

## 팀 구성

본 프로젝트는 오픈소스기초설계 수업의 **5조** 팀 프로젝트입니다:

- **구효민**: 프로젝트 전체 설계 / 아키텍처, 사용자 플로우 설계, 기능 통합 및 에이전트 도구 개발
- **강승원**: Discord bot (Connector) 개발, UI/UX담당
- **남궁현**: Controller 개발 / 데이터베이스 스키마 작성 및 관리
- **정은광**: OpenCode 프로세스 / API통합(Runner), 에이전트 실행 엔진

## 오픈소스

CNAP은 MIT 라이선스로 공개된 오픈소스 프로젝트입니다.

- **소스 코드**: [github.com/cnap-oss/app](https://github.com/cnap-oss/app)
- **문서**: [github.com/cnap-oss/docs](https://github.com/cnap-oss/docs)
