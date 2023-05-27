/*
DESCRIPTION:
Write a function calculate that, given a list of rectangles, finds the area of their union.

Each rectangle is represented by four integers [x0, y0, x1, y1], where (x0, y0) 
is the lower-left corner and (x1, y1) is the upper-right corner. 
The origin (0, 0) is bottom left. 
For the representation used for your language, see the example tests.

See linked kata for a more detailed example.

Constraints
Performance requirement: Number of rectangles n ≥ 0:
For JavaScript: 10 tests with n ≤ 5000, and 10 tests with n ≤ 20,000
For Python: 10 tests with n ≤ 1500, and 7 tests with n ≤ 8000
Coordinates: 0 ≤ xi, yi ≤ 1,000,000


ПЕРЕВОД:
Напишите функцию calculate, которая по заданному списку прямоугольников находит площадь их объединения.

Каждый прямоугольник представлен четырьмя целыми числами [x0, y0, x1, y1], где (x0, y0) -
нижний левый угол, а (x1, y1) - верхний правый угол.
Начало координат (0, 0) находится в нижнем левом углу.
Для представления используйте примеры тестов для вашего языка программирования.

Смотрите связанный ката для более подробного примера.

Ограничения
Требования к производительности: количество прямоугольников n ≥ 0:
Для JavaScript: 10 тестов с n ≤ 5000 и 10 тестов с n ≤ 20000
Для Python: 10 тестов с n ≤ 1500 и 7 тестов с n ≤ 8000
*/

function calculate(rect) {
    if(!rect.length) {return 0;}
    const xCoords = new Set, 
          events = [];
    rect.forEach(([x1, y1, x2, y2]) => {
      xCoords.add(x1).add(x2);
      events.push([y1, 1, x1, x2]);
      events.push([y2, -1, x1, x2]);
    });
    const sortedXCoords = Array.from(xCoords).sort((a, b) => a - b);
  
    let n = 1;
    while(n + 1 < sortedXCoords.length) {
      n <<= 1;
    }
    const c = Array(n << 1).fill(0), s = c.slice(), w = c.slice();
    const xIndex = sortedXCoords.reduce((hash, x, i) => {
      hash[x] = i;
      if(i) {
        w[n + i - 1] = x - sortedXCoords[i - 1];
      }
      return hash;
    }, {});
    for(let p = n - 1; p >= 0; p--) {
      w[p] = w[p << 1] + w[(p << 1) + 1];
    }
  
    const change = (i, k, offset) => {
      const recf = (p, start, span) => {
        if(start + span <= i || k <= start) {
          return;
        }
        if(i <= start && start + span <= k) {
          c[p] += offset;
        } else {
          recf(p << 1, start, span >> 1);
          recf((p << 1) + 1, start + (span >> 1), span >> 1);
        }
        s[p] = c[p] ? w[p] : (p < n ? s[p << 1] + s[(p << 1) + 1] : 0);
      };
      recf(1, 0, n);
    };
  
    let area = 0, 
        prevY = 0;
    events.sort((a, b) => a[0] - b[0] || a[1] - b[1] || a[2] - b[2] || a[3] - b[3]).forEach(event => {
      area += (event[0] - prevY) * s[1];
      change(xIndex[event[2]], xIndex[event[3]], event[1]);
      prevY = event[0];
    });
    return area;
}