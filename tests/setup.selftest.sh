#!/usr/bin/env bash
set -euo pipefail
fail(){ echo "◇ FAIL: $1"; exit 1; }
pass(){ echo "✦ PASS: $1"; }
R="/workspace/_codex/setup-report.md"; L="/workspace/_codex/setup.log"
[ -f "$R" ] || fail "setup-report.md missing"
grep -q "^- Name: " "$R" || fail "env name missing"
grep -q "Internet access after setup: false" "$R" || fail "internet not Off"
grep -Eq "/workspace|/workspaces" "$R" || fail "workspace path not recorded"
[ -f "$L" ] || fail "setup.log missing"
pass "all checks passed"
