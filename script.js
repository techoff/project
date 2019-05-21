var act, el, att, acts, tlst, sk, i, lst, l, right, left, i, j, g, att, k, h;
lst = prompt('Введите логическое выражение', 'A*(B+C)').replace(/\s/g, '');

l = ('(' + lst + ')').split('');
lst = lst.split('');
act, el, att, acts, tlst, sk = [], [], [], [], {}, [], [];
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
            acts[i].push(el[g-1])
        }
    }
    else {
        if ((i-1 in att) == false) {
            acts.push(i-1);
            att.push(i-1);
            k = 1;
            while ((k < sk.length) && (sk[k] != i-1)) {
                k += 2;
            }
            if (k < sk.length) {
                att.push(sk[k-1]);
            }
        }
        else {
            acts[i].push(-2);
        }
        if ((((i+1) in att) == false) && (lst[i+1] != '!')) {
            acts[i].push(i+1);
            att.push(i+1);
            k = 0;
            while ((k < sk.length) && (sk[k] != i+1)) {
                k += 2;
            }
            if (k < sk.length) {
                att.push(sk[k+1]);
            }
        }
        else if ((lst[i+1] == '!') && ((i+2 in att) == false)) {
            acts[i].push(i+2);
            att.push(i+2);
            k = 0;
            while ((k < sk.length) && (sk[k] != i+2)) {
                k +=2;
            }
            if (k < sk.length) {
                att.push(sk[k+1]);
            }
        }
        else {
            acts[i].push(-2);
        }
    }
}
for (i in acts) {
    if (acts[i][0] in sk) {
        k = 0;
        while (act[k][1] != acts[i][0]) {
            k +=1;
        }
        acts[i][0] = act[k][-1];
    }
    if ((acts[i].length > 1) && (acts[i][1] in sk)) {
        k = 0;
        while (act[k][0] != acts[i][1]) {
            k += 1;
        }
        acts[i][1] = act[k][-1];
        
    }
    if ((acts[i][0] == -2) && (acts[i][1] == -2)) {
        k = 0;
        while ((i in act[k]) == false) {
            k += 1;
        }
        h = 0;
        while (act[k][h] != i) {
            h += 1;
        }
        acts[i][0] = act[k][h-2];
        acts[i][1] = act[k][h-1];
    }
    else if (acts[i][0] == -2) {
        k = 0;
        while ((i in act[k]) == false) {
            k += 1;
        }
        h = 0;
        while (act[k][h] != i) {
            h += 1;
        }
        acts[i][0] = act[k][h-1];
    }
    else if ((acts[i].length > 1) && (acts[i][1]) == -2) {
        k = 0;
        while ((i in act[k]) == false) {
            k += 1;
        }
        while (act[k][h] != i) {
            h += 1;
        }
        acts[i][1] = act[k][h-1];
    }
}

alert(acts);