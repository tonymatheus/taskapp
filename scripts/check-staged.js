const { execSync } = require('child_process');

try {
  const unstaged = execSync('git diff --name-only').toString().trim();

  if (unstaged) {
    console.error('\n❌ You have unstaged changes:\n');

    console.error(unstaged);

    console.error('\nPlease run:\n');
    console.error('git add .\n');

    process.exit(1);
  }
  if (!unstaged) {
    console.error('\n❌ No staged files found.');
    console.error('Run git add before committing.\n');
    process.exit(1);
  }

  console.log('✅ All changes are staged.\n');
} catch (error) {
  console.error('❌ Failed to check staged files.');
  process.exit(1);
}
