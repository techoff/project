var act, ls, el, att, acts, tlst, sk, i, lst, lst1, l, right, left, i, j, g, att;
lst1 = prompt('Введите логическое выражение без пробелов');
lst = '';
for (i; lst1; i++) {
    lst = lst + i
}
lst = '(' + lst + ')';
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
    tlst = [left - 1, right - 1];
    sk.push(left - 1);
    sk.push(right - 1);
    for (j = left; right; j++) {
        if (l[j] == '*') {
            tlst.push(j-1);
            el.push(j-1);
        }
    }
    for (j = left; right; j++) {
        if (l[j] == '+') {
            tlst.push(j-1);
            el.push(j-1);
        }
        l[j] = ' ';
    }
    if (l[left-1] == '!') {
        tlst.push(left-2);
        el.push(left-2);
        l[left-1] = ' ';
    }
    act.push(tlst);
}
g = -1;
for (i; el; i++) {
    g += 1;
    acts[i] = [];
    if (lst[i] == '!') {
        if ((lst[i+1] == '(') && (lst[i+3] == ')')) {
            acts[i].push(i+2);
            att.push(i+2);
        }
        else {
            acrs[i].push(el[g-1])
        }
    }
    else {
        if (i-1 not in att) {
            acts.push(i-1);
            att.push(i-1);
            k = 1;
            while ((k < sk.length) && (sk[k] != i-1)) {
                k += 2;
            }
            if (k < sk[k-1].length) {
                att.push(sk[k-1]);
            }
        }
    }
}
