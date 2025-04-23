#!/usr/bin/env python3
"""
Task creation module
"""
import asyncio

wait_random = __import__('0-basic_async_syntax').wait_random


def task_wait_random(max_delay: int) -> asyncio.Task:
    """
    Creates and returns an asyncio.Task for the wait_random coroutine.

    Args:
        max_delay (int): Maximum delay to pass to wait_random

    Returns:
        asyncio.Task: Task that executes wait_random with the given max_delay
    """
    task = asyncio.create_task(wait_random(max_delay))
    return task
