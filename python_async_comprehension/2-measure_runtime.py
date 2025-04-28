#!/usr/bin/env python3
"""
Measure Runtime module
"""
from asyncio import gather
from time import time

async_comprehension = __import__('1-async_comprehension').async_comprehension


async def measure_runtime() -> float:
    """
    Executes async_comprehension four times in parallel using asyncio.gather
    and measures the total runtime.
    """
    start_time = time()
    await gather(
        async_comprehension(),
        async_comprehension(),
        async_comprehension(),
        async_comprehension()
    )
    end_time = time()
    return end_time - start_time
