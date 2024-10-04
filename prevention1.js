//vunerablecode
const userComment = "<script>alert('Hacked!');</script>";
document.body.innerHTML =`User comment: &{userComment}`;
console.log(document.body.innerHTML);