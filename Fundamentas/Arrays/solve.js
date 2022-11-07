function solve(){
    const a = ['23', '-2', '321','87', '42', '90', '-123'];
    [a[3], a[4]] = [a[4], a[3]]
    console.log(a);
}

solve();