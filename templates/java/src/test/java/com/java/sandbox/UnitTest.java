package com.java.sandbox;

import org.junit.*;
import com.java.sandbox.UnitOfWork;

public class UnitTest {
    private UnitOfWork _unitOfWork;

    @Before
    public void Setup() {
        _unitOfWork = new UnitOfWork();
    }

    @Test
    public void test() {
        int result = _unitOfWork.add(5,5);
        Assert.assertTrue("sum is not correct", result == 10);
    }
}
