package com.java.sandbox;

import org.junit.*;
import com.java.sandbox.UnitOfWork;
import java.util.*;

public class UnitTest {
    private UnitOfWork _unitOfWork;

    @Before
    public void Setup() {
        _unitOfWork = new UnitOfWork(4, 4);
    }

    @Test
    public void test() {
        _unitOfWork = new UnitOfWork(5, 7);
        int[][] result = _unitOfWork.setElement(0,0);

        String expectedMatrix = "[[0, 0, 0, 0, 0], [0, 9, 9, 9, 9], [0, 9, 9, 9, 9], [0, 9, 9, 9, 9], [0, 9, 9, 9, 9], [0, 9, 9, 9, 9], [0, 9, 9, 9, 9]]";

        Assert.assertTrue("matrix does not have expected values",
            expectedMatrix.equals(Arrays.deepToString(result)));
    }
}
