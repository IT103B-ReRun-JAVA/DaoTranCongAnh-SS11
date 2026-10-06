| Trường hợp kiểm thử  | Dữ liệu đầu vào       | Kết quả sai thực tế      | Kết quả đúng mong đợi |
| -------------------- | --------------------- | ------------------------ | --------------------- |
| Tắt điều hòa         | `{ isActive: false }` | `isActive` vẫn là `true` | `isActive` → `false`  |
| Hạ công suất đèn ngủ | `{ powerWatts: 0 }`   | `powerWatts` vẫn là `40` | `powerWatts` → `0`    |
