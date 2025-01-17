test
// دالة لإيجاد وطباعة أكبر قيمة في المصفوفة
function printMaxValue(arr) {
    if (arr.length === 0) {
        console.log("The array is empty.");
        return;
    }
    // استخدام دالة Math.max مع الانتشار (...) لإيجاد أكبر قيمة
    const maxValue = Math.max(...arr);
    console.log("The maximum value is:", maxValue);
}

// مثال على الاستخدام
const numbers = [10, 25, 37, 42, 99, 3];
printMaxValue(numbers);