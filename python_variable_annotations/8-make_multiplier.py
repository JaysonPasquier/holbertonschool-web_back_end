#!/usr/bin/env python3
"""Module for creating a multiplier function."""
from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """
    Return a function that multiplies a float by the given multiplier.

    Args:
        multiplier: A float value to multiply by

    Returns:
        A function that takes a float and returns the product with multiplier
    """
    def multiply(x: float) -> float:
        return x * multiplier

    return multiply
