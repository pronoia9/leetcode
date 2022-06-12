// ***********************************************   13. Roman to Integer   *********************************************** //
// Roman numerals are represented by seven different symbols: I (1), V (5), X (10), L (50), C (100), D (500) and M (1000).
// Given a roman numeral, convert it to an integer.
// https://leetcode.com/problems/roman-to-integer/
//
// Runtime:       269 ms,   faster than   12.91%
// Memory Usage:  47.1 MB,  less than     64.79%
{
  var romanToInt = function (s) {
    let count = 0;

    while (s.length > 0 && s.includes('IV')) {
      count = count + 4;
      s = s.replace('IV', '');
    }
    while (s.length > 0 && s.includes('IX')) {
      count = count + 9;
      s = s.replace('IX', '');
    }
    while (s.length > 0 && s.includes('XL')) {
      count = count + 40;
      s = s.replace('XL', '');
    }
    while (s.length > 0 && s.includes('XC')) {
      count = count + 90;
      s = s.replace('XC', '');
    }
    while (s.length > 0 && s.includes('CD')) {
      count = count + 400;
      s = s.replace('CD', '');
    }
    while (s.length > 0 && s.includes('CM')) {
      count = count + 900;
      s = s.replace('CM', '');
    }
    while (s.length > 0 && s.includes('I')) {
      count = count + 1;
      s = s.replace('I', '');
    }
    while (s.length > 0 && s.includes('V')) {
      count = count + 5;
      s = s.replace('V', '');
    }
    while (s.length > 0 && s.includes('X')) {
      count = count + 10;
      s = s.replace('X', '');
    }
    while (s.length > 0 && s.includes('L')) {
      count = count + 50;
      s = s.replace('L', '');
    }
    while (s.length > 0 && s.includes('C')) {
      count = count + 100;
      s = s.replace('C', '');
    }
    while (s.length > 0 && s.includes('D')) {
      count = count + 500;
      s = s.replace('D', '');
    }
    while (s.length > 0 && s.includes('M')) {
      count = count + 1000;
      s = s.replace('M', '');
    }

    return count;
  };
}
//
// Runtime:       173 ms,   faster than   57.91%
// Memory Usage:  49 MB,    less than     18.17%
{
  var romanToInt = function (s) {
    let matches = s.match(/(I[VX])|(X[LC])|(C[DM])|([IVXLCDM])/g);
    return matches
      .map((e) => {
        if (e === 'IV') {
          return 4;
        } else if (e === 'IX') {
          return 9;
        } else if (e === 'XL') {
          return 40;
        } else if (e === 'XC') {
          return 90;
        } else if (e === 'CD') {
          return 400;
        } else if (e === 'CM') {
          return 900;
        } else if (e === 'I') {
          return 1;
        } else if (e === 'V') {
          return 5;
        } else if (e === 'X') {
          return 10;
        } else if (e === 'L') {
          return 50;
        } else if (e === 'C') {
          return 100;
        } else if (e === 'D') {
          return 500;
        } else if (e === 'M') {
          return 1000;
        }
      })
      .reduce((prev, curr) => (prev = prev + curr));
  };
}
//
// Runtime:       139 ms,   faster than   79.12%   |   140 ms,    faster than   78.43%   |   155 ms,    faster than   69.17%
// Memory Usage:  47.7 MB,  less than     41.86%   |   48.1 MB,   less than     32.82%   |   48.8 MB,   less than     22.30%
export default function romanToInt(s) {
  return s
    .match(/(I[VX])|(X[LC])|(C[DM])|([IVXLCDM])/g)
    .map((e) => {
      if (e === 'IV') {
        return 4;
      } else if (e === 'IX') {
        return 9;
      } else if (e === 'XL') {
        return 40;
      } else if (e === 'XC') {
        return 90;
      } else if (e === 'CD') {
        return 400;
      } else if (e === 'CM') {
        return 900;
      } else if (e === 'I') {
        return 1;
      } else if (e === 'V') {
        return 5;
      } else if (e === 'X') {
        return 10;
      } else if (e === 'L') {
        return 50;
      } else if (e === 'C') {
        return 100;
      } else if (e === 'D') {
        return 500;
      } else if (e === 'M') {
        return 1000;
      }
    })
    .reduce((prev, curr) => (prev = prev + curr), 0);
}
//
// Runtime:       226 ms,   faster than   24.33%
// Memory Usage:  47.9 MB,  less than     39.26%
{
  var romanToInt = function (s) {
    let matches = s.match(/(I[VX])|(X[LC])|(C[DM])|([IVXLCDM])/g);
    return matches.reduce((prev, curr) => {
      if (curr === 'IV') {
        return (prev = prev + 4);
      } else if (curr === 'IX') {
        return (prev = prev + 9);
      } else if (curr === 'XL') {
        return (prev = prev + 40);
      } else if (curr === 'XC') {
        return (prev = prev + 90);
      } else if (curr === 'CD') {
        return (prev = prev + 400);
      } else if (curr === 'CM') {
        return (prev = prev + 900);
      } else if (curr === 'I') {
        return (prev = prev + 1);
      } else if (curr === 'V') {
        return (prev = prev + 5);
      } else if (curr === 'X') {
        return (prev = prev + 10);
      } else if (curr === 'L') {
        return (prev = prev + 50);
      } else if (curr === 'C') {
        return (prev = prev + 100);
      } else if (curr === 'D') {
        return (prev = prev + 500);
      } else if (curr === 'M') {
        return (prev = prev + 1000);
      }
    }, 0);
  };
}
//
// Runtime:       188 ms,   faster than   47.93%   |   160 ms,   faster than   66.50%   |   180 ms,   faster than   53.29%
// Memory Usage:  48.2 MB,  less than     30.88%   |   48.4 MB,  less than     28.94%   |   48.2 MB,  less than     30.88%
{
  var romanToInt = function (s) {
    return s.match(/(I[VX])|(X[LC])|(C[DM])|([IVXLCDM])/g).reduce((prev, curr) => {
      switch (curr) {
        case 'IV':
          return (prev = prev + 4);
        case 'IX':
          return (prev = prev + 9);
        case 'XL':
          return (prev = prev + 40);
        case 'XC':
          return (prev = prev + 90);
        case 'CD':
          return (prev = prev + 400);
        case 'CM':
          return (prev = prev + 900);
        case 'I':
          return (prev = prev + 1);
        case 'V':
          return (prev = prev + 5);
        case 'X':
          return (prev = prev + 10);
        case 'L':
          return (prev = prev + 50);
        case 'C':
          return (prev = prev + 100);
        case 'D':
          return (prev = prev + 500);
        case 'M':
          return (prev = prev + 1000);
      }
    }, 0);
  };
}
// ************************************************************************************************************************ //