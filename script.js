var act, ls, el, att, acts, tlst, sk, i, lst, lst1, l, right, left, i;
lst1 = prompt('Введите логическое выражение без пробелов');
lst = '';
for (i; lst1; i++){
    lst = lst + i
}
lst = '('+lst+')';
l = lst.split();
lst = lst.split();
while('('in l) {
    left = 0;
    right = 0;
    while (l[right] != ')') {
        right += 1;
    }
    left = right;
    while (l[left] != '(') {
        left -= 1;
    }
    tlst = [left-1, right-1];
    sk.push(left-1);
    sk.push(right-1);
    for (j)
}

