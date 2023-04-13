def main(param):
    # your code goes here
   
    if len(param) == 12 and param[:3].isupper() and param[3:].isdigit():
        print("Right Vaccination Code")
    else:
        print("Wrong Vaccination Code")

if __name__ == '__main__':
    s = input()
    main(s)
    print('')



///


def main(param):
    # your code goes here
    param = param.lower()
    param = param.replace(" ", "")
    unique_chars = []
    for karakter in param:
        if karakter not in unique_chars:
            unique_chars.append(karakter)
    sorted_chars = sorted(unique_chars, key=lambda x: param.index(x))
    sorted_str = "".join(sorted_chars)
    output = ""
    for karakter in sorted_str:
        count = param.count(karakter)
        output += karakter * count
    print(output)


if __name__ == '__main__':
    s = input()
    main(s)


def main(s):
    # your code goes here

    if int(s) <= 50:
        for i in range(1, int(s)+1):
            if i % 2 == 0:
                print(i, end=' ')
            else:
                print("Odd", end=' ')
    else:
        print('Max.Input is 50')


if __name__ == '__main__':
    s = input()
    main(s)
