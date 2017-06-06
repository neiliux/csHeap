package com.java.sandbox;

import java.util.*;

public class UnitOfWork {
    private int[][] _matrix;
    private int _xLength;
    private int _yLength;

    public UnitOfWork(int x, int y) {
        _xLength = x;
        _yLength = y;
        initializeMatrix();
    }

    private void initializeMatrix() {
        _matrix = new int[_yLength][_xLength];
        for (int y=0; y<_yLength; y++) {
            for (int x=0; x<_xLength; x++) {
                _matrix[y][x] = 9;
            }
        }
    }

    public int[][] setElement(int x, int y) {
        if (x < 0 || x > _xLength-1
            || y < 0 || y > _yLength-1) {
            throw new ArrayIndexOutOfBoundsException();
        }

        for (int i=0; i<_xLength; i++) {
            _matrix[y][i] = 0;
        }

        for (int i=0; i<_yLength; i++) {
            _matrix[i][x] = 0;
        }

        return _matrix;
    }
}
