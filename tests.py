#!/usr/bin/env python

import sys


SYMBOLS = [
"""\
 _
| |
|_|\
""",
"""\
 |
 |
 | """,
"""\
___
 _|
|__""",
"""\
___
__|
__|""",
"""\
| |
|_|
  |""",
"""\
___
|_
__|""",
"""\
__
|_
|_|""",
"""\
___
  |
  |""",
"""\
___
|_|
|_|""",
"""\
___
| |
|_|
__|"""]


def build_map():
    """Build a map of LED pattern to numeric value."""
    symbol_map = {}
    for i, symbol in enumerate(SYMBOLS):
        line = symbol.replace('\n', '')
        symbol_map[line] = i
    return symbol_map

if __name__ == '__main__':
    # open file with three digits
    lines = [line.strip('\n') for line in open(sys.argv[1]).readlines()]
    assert len(lines) == 3
    symbols = ['', '', '']
    row = 0
    for line in lines:
        assert len(line) == 9
        for i in range(9):
            symbols[i / 3] += line[i]
    symbol_map = build_map()
    for symbol in symbols:
        sys.stdout.write(str(symbol_map[symbol]))
        print          

    

   