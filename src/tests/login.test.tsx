import { describe, it } from 'vitest';

describe('Login test', () => {
  it('이메일이 유효하지 않다면 에러 텍스트를 볼 수 있어야 한다.');
  it('패스워드가 유요하지 않다면 에러 텍스트를 볼 수 있어야 한다.');
  it('이메일, 패스워드가 유효하지 않다면 로그인 되지 않아야 한다.');
  it('이메일, 패스워드가 유효하면 로그인 버튼을 통해 로그인 할 수 있어야 한다.');
});
