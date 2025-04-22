#!/usr/bin/env python3
"""Module for creating a tuple from a string and int/float."""
from typing import Union, Tuple


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """
    Return a tuple with the string k and the square of v as a float.

    Args:
        k: A string value
        v: An integer or float value

    Returns:
        A tuple where the first element is k and the second is v squared
    """
    return (k, float(v ** 2))
