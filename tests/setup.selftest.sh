#!/usr/bin/env bash
set -euo pipefail
fail(){ echo "◇ FAIL: $1"; exit 1; }
pass(){ echo "✦ PASS: $1"; }
REPORT_FILE="/workspace/_codex/setup-report.md"
LOG_FILE="/workspace/_codex/setup.log"

[[ -f "$REPORT_FILE" ]] || fail "setup-report.md missing"
grep -q "^- Name: " "$REPORT_FILE" || fail "env name missing"
grep -q "Internet access after setup: false" "$REPORT_FILE" || fail "internet not Off"
grep -Eq "/workspaces?" "$REPORT_FILE" || fail "workspace path not recorded"
[[ -f "$LOG_FILE" ]] || fail "setup.log missing"
pass "all checks passed"
