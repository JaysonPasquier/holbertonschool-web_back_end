#!/usr/bin/env python3
"""Module for calculating element lengths."""
from typing import Iterable, Sequence, List, Tuple


def element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:
    """
    Return a list of tuples with each element and its length.

    Args:
        lst: An iterable containing sequences

    Returns:
        A list of tuples where each tuple contains an element from lst and its length
    """
    return [(i, len(i)) for i in lst]
