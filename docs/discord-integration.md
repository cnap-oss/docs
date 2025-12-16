# Discord 연동

CNAP은 Discord 메신저를 기본 GUI로 사용합니다. 이 문서에서는 Discord 봇을 설정하고 CNAP과 연동하는 방법을 안내합니다.

## Discord 봇 생성

### 1. Discord 개발자 포털 접속

[Discord Developer Portal](https://discord.com/developers/applications)에 접속하여 로그인합니다.

### 2. 새 Application 생성

1. **"New Application"** 버튼을 클릭합니다.
2. Application 이름을 입력합니다 (예: CNAP Bot).
3. **"Create"**를 클릭합니다.

### 3. Bot 추가

1. 왼쪽 메뉴에서 **"Bot"**을 선택합니다.
2. **"Add Bot"** 버튼을 클릭합니다.
3. 확인 메시지가 나타나면 **"Yes, do it!"**을 클릭합니다.

### 4. 봇 토큰 발급

1. Bot 설정 페이지에서 **"Reset Token"** 버튼을 클릭합니다.
2. 생성된 토큰을 복사하여 안전한 곳에 보관합니다.

::: danger 보안 경고
봇 토큰은 절대 공개하거나 GitHub에 올리지 마세요. 토큰이 유출되면 즉시 재발급하세요.
:::

### 5. 봇 권한 설정

Bot 설정 페이지에서 다음 권한을 활성화합니다:

- **Privileged Gateway Intents**
  - Presence Intent
  - Server Members Intent
  - Message Content Intent

## 봇 서버 초대

### 1. OAuth2 URL 생성

1. 왼쪽 메뉴에서 **"OAuth2"** > **"URL Generator"**를 선택합니다.
2. **Scopes**에서 다음을 선택합니다:
   - `bot`
   - `applications.commands`

### 2. 봇 권한 선택

**Bot Permissions**에서 다음 권한을 선택합니다:

- Read Messages/View Channels
- Send Messages
- Create Public Threads
- Send Messages in Threads
- Manage Messages
- Embed Links
- Attach Files
- Read Message History
- Use Slash Commands

### 3. 초대 링크 사용

1. 페이지 하단에 생성된 URL을 복사합니다.
2. 웹 브라우저에서 해당 URL로 접속합니다.
3. 봇을 추가할 서버(길드)를 선택합니다.
4. **"승인"** 또는 **"Authorize"**를 클릭합니다.

## CNAP과 연결

Discord 봇 토큰을 CNAP 환경변수에 설정합니다:

```bash
export CNAP_DISCORD_TOKEN="your-discord-bot-token"
```

또는 설정 파일에 추가합니다:

```yaml
discord:
  token: "your-discord-bot-token"
```

CNAP을 실행하면 Discord 연결 성공 로그가 출력됩니다:

```
INFO  Discord connector initialized
INFO  Bot connected as CNAP#1234
```

## 연결 확인

Discord 서버에서 봇이 온라인 상태인지 확인합니다. 채널에서 `/` (슬래시)를 입력하면 사용 가능한 CNAP 명령어 목록이 표시됩니다.

::: tip 참고
슬래시 명령어가 표시되지 않는 경우:

1. 봇이 온라인 상태인지 확인하세요.
2. CNAP 서버가 정상 실행 중인지 확인하세요.
3. 봇이 해당 채널에 접근할 수 있는 권한이 있는지 확인하세요.
4. 몇 분 후 다시 시도하세요 (Discord 명령어 동기화에 시간이 걸릴 수 있습니다).
   :::
