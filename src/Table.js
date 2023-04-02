import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addRow, editRow, deleteRow } from "./tableSlice";

const Table = () => {
  const [editMode, setEditMode] = useState(false);
  const data = useSelector((state) => state.data.data);
  const [formData, setFormData] = useState({sn:data.length + 1});
  const dispatch = useDispatch();
  
  console.log(data);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSaveClick = () => {
    if (editMode) {
      dispatch(editRow(formData));
    } else {
      dispatch(
        addRow({ ...formData, id: Math.floor(Math.random() * 1000) + 1 })
      );
    }
    setFormData({});
    setEditMode(false);
  };

  const handleEditClick = (row) => {
    setFormData(row);
    setEditMode(true);
  };

  const handleDeleteClick = (id) => {
    dispatch(deleteRow(id));
  };

  return (
    <table>
      <thead>
        <tr>
          <th>SN</th>
          <th>Account No</th>
          <th>Division</th>
          <th>Country</th>
          <th>Legacy No</th>
          <th>Legacy Division</th>
          <th>Edit</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={row.id}>
            <td>{row.sn}</td>
            <td>{row.accountNo}</td>
            <td>{row.division}</td>
            <td>{row.country}</td>
            <td>{row.legacyNo}</td>
            <td>{row.legacyDivision}</td>
            <td>
              <button onClick={() => handleEditClick(row)}>Edit</button>
              <button onClick={() => handleDeleteClick(row.id)}>Delete</button>
            </td>
          </tr>
        ))}
        <tr>
          <td>
            {data.length + 1}
          </td>
          <td>
            <input
              type="text"
              name="accountNo"
              value={formData.accountNo || ""}
              onChange={handleInputChange}
            />
          </td>
          <td>
            <input
              type="text"
              name="division"
              value={formData.division || ""}
              onChange={handleInputChange}
            />
          </td>
          <td>
            <input
              type="text"
              name="country"
              value={formData.country || ""}
              onChange={handleInputChange}
            />
          </td>
          <td>
            <input
              type="text"
              name="legacyNo"
              value={formData.legacyNo || ""}
              onChange={handleInputChange}
            />
          </td>
          <td>
            <input
              type="text"
              name="legacyDivision"
              value={formData.legacyDivision || ""}
              onChange={handleInputChange}
            />
          </td>
          <td>
            
            <button onClick={handleSaveClick}>
              {editMode ? "Save" : "Add"}
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
