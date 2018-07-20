import unittest
from assignment4 import add, subtract, multiply, divide

class Assignment4Tests(unittest.TestCase):
  def testAdd(self):
    self.assertEqual(add(1, 2), 3)
  
  def testSubtract(self):
    self.assertEqual(subtract(5, 3), 2)

  def testMultiply(self):
    self.assertEqual(multiply(4, 2), 8)

  def testDivide(self):
    self.assertEqual(divide(4, 2), 2)


if __name__ == '__main__':
  unittest.main()