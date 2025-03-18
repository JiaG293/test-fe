import { jsx as _jsx } from "react/jsx-runtime";
const ContentSection = ({ loading }) => {
    return _jsx("div", { children: loading ? "Đang tải..." : "Nội dung hiển thị ở đây" });
};
export default ContentSection;
