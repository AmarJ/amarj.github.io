import sys
import random
from graphics import *

def main():
    size = 100
    y_offset = 10
    x_offset = 10

    window = GraphWin("My Circle", 700, 700, autoflush=False)

    n = False

    while (not n):
        key_pressed = window.getKey()

        matrix = random_matrix(size, True)

        for i in range(0, len(matrix)):
            y = i * y_offset
            for j in range(0, len(matrix[i])):
                x = j * x_offset
                color = matrix[i][j]
                c1 = color[1]
                c2 = color[0]
                c3 = color[1]
                # t_rect = Point(x,y)
                t_rect = Rectangle(Point(x,y), Point( x + x_offset, y + y_offset))
                t_rect.setFill(color_rgb(c1, c2, c3))
                t_rect.draw(window)

        # if key_pressed == 'space':
        #     n = True

    window.close()

    # import pdb; pdb.set_trace()
        


def random_matrix(size=10, all_colors=False):

    m_matrix = dict()

    for i in range(0, size):
        row = dict()
        for j in range(0, size):
            row[j] = random_color(all_colors)
        m_matrix[i] = row

    return m_matrix
    

def random_color(all_colors=False):
    if all_colors:
        return [random.randint(0,255), random.randint(0,255), random.randint(0,255)]

    if (random.randint(0,2)):
        return 255
    
    return 0

main()