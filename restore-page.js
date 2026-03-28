import { execSync } from 'child_process';
import path from 'path';

try {
  const result = execSync('git show origin/main:vatfaktura/app/page.tsx', {
    cwd: '/vercel/share/v0-project',
    encoding: 'utf-8'
  });
  console.log(result);
} catch (error) {
  console.error('Error:', error.message);
}
