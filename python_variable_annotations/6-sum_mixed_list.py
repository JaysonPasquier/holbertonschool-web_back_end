#!/usr/bin/env python3
"""Module for summing a mixed list of integers and floats."""
from typing import List, Union


def sum_mixed_list(mxd_lst: List[Union[int, float]]) -> float:
    """
    Calculate the sum of a list of integers and floats.

    Args:
        mxd_lst: A list containing integers and floats

    Returns:
        The sum of all elements as a float
    """
    return float(sum(mxd_lst))
