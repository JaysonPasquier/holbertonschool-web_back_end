#!/usr/bin/env python3
"""Module for summing a list of floats."""
from typing import List


def sum_list(input_list: List[float]) -> float:
    """
    Calculate the sum of a list of floats.

    Args:
        input_list: A list of floating point numbers

    Returns:
        The sum of all elements as a float
    """
    return sum(input_list)
