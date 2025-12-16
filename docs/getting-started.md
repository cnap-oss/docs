# 시작하기

## 전체 사용 흐름 개요

CNAP의 전체 사용 흐름은 다음과 같습니다:

1. **CNAP 실행을 위한 필수 도구를 설치하고 소스 코드를 빌드합니다.**
2. **설정 파일과 환경변수를 구성한 뒤 CNAP을 실행합니다.**
3. **Discord 봇 토큰을 이용해 CNAP과 Discord를 연결하고 봇을 서버에 초대합니다.**
4. **Discord 채널에서 명령어를 통해 에이전트를 생성하고 실행 결과를 확인합니다.**

## 설치 및 실행 환경 준비

CNAP은 Linux 환경에서 실행되며, 에이전트 실행 시 격리된 환경을 제공하기 위해 Docker와 runc를 사용합니다. 설치 전 다음과 같은 환경이 준비되어야 합니다.

### 필수 요구사항

- **운영체제**: Linux (커널 3.10 이상 권장)
- **Go**: 1.23 이상
- **Docker 및 runc**: 최신 버전
- **Git**: 소스 코드 클론용
- **실행 권한**: 컨테이너 실행을 위한 root 권한
- **Discord 봇 토큰**

::: tip 참고
Docker는 에이전트 실행을 위한 컨테이너 환경을 제공하며, 공식 Docker 저장소 또는 배포판 패키지 매니저를 통해 설치합니다.

runc는 Docker 내부에서 사용하는 컨테이너 런타임으로, Docker 설치 시 함께 제공되거나 패키지 매니저를 통해 설치할 수 있습니다.
:::

## 소스 코드 클론 및 빌드

환경 준비가 완료되면 CNAP 소스 코드를 클론하고 빌드합니다.

```bash
# 저장소 클론
git clone https://github.com/cnap-oss/app.git
cd app

# 빌드
make build
```

빌드가 완료되면 `./bin/cnap` 실행 파일이 생성됩니다. 아래 명령어 실행 시 도움말이 출력되면 정상적으로 빌드된 상태입니다.

```bash
./bin/cnap --help
```

## 설정 파일 및 환경변수 구성

CNAP은 환경변수 또는 설정 파일을 통해 동작합니다. 주요 설정 항목은 다음과 같습니다:

| 환경변수             | 설명                                  |
| -------------------- | ------------------------------------- |
| `CNAP_DB_DSN`        | 데이터베이스 연결 정보                |
| `CNAP_LOG_LEVEL`     | 로그 레벨 (debug, info, warn, error)  |
| `CNAP_RUNNER_MODE`   | 에이전트 실행 방식 (docker 또는 host) |
| `CNAP_DISCORD_TOKEN` | Discord 봇 토큰                       |

### 환경변수 예시

```bash
export CNAP_DB_DSN="postgresql://user:password@localhost:5432/cnap"
export CNAP_LOG_LEVEL="info"
export CNAP_RUNNER_MODE="docker"
export CNAP_DISCORD_TOKEN="your-discord-bot-token"
```

### 설정 파일 사용

설정 파일을 사용하는 경우 `--config` 옵션을 통해 경로를 전달합니다.

```bash
./bin/cnap --config config.yaml
```

## CNAP 실행

### 바이너리 실행

```bash
./bin/cnap serve
```

실행 후 로그에 초기화 메시지와 Discord 연결 성공 메시지가 출력되면 정상 실행 상태입니다. 프로세스가 종료되지 않고 대기 중인지 확인합니다.

### Docker 실행

```bash
docker run -d \
  -e CNAP_DB_DSN="postgresql://user:password@db:5432/cnap" \
  -e CNAP_DISCORD_TOKEN="your-discord-bot-token" \
  -e CNAP_RUNNER_MODE="docker" \
  -v /var/run/docker.sock:/var/run/docker.sock \
  cnap/cnap:latest
```

컨테이너 로그에 오류 메시지가 없고 Discord 연결 로그가 출력되면 정상 상태입니다.

::: warning 중요
Docker 모드로 실행할 때는 Docker 소켓을 마운트해야 에이전트 컨테이너를 생성할 수 있습니다.
:::
