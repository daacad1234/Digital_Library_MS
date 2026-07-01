import React, { useEffect, useState } from "react";
import api from "../api";

function Members() {
  const [members, setMembers] = useState([]);
  const [filteredMembers, setFilteredMembers] = useState([]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [editingId, setEditingId] = useState(null);
  const [search, setSearch] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    loadMembers();
  }, []);

  useEffect(() => {
    const filtered = members.filter((member) => {
      return (
        member.memberId.toString().includes(search.toLowerCase()) ||
        member.name.toLowerCase().includes(search.toLowerCase())
      );
    });

    setFilteredMembers(filtered);
  }, [search, members]);

  const loadMembers = async () => {
    setLoading(true);

    try {
      const response = await api.get("/members");
      setMembers(response.data);
      setFilteredMembers(response.data);
    } catch {
      setError("Unable to load members.");
    } finally {
      setLoading(false);
    }
  };

  const clearForm = () => {
    setName("");
    setEmail("");
    setPhone("");
    setEditingId(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setSuccessMessage("");

    if (!name.trim() || !email.trim()) {
      setError("Name and Email are required.");
      return;
    }

    try {
      if (editingId) {
        await api.put(`/members/${editingId}`, {
          name,
          email,
          phone,
        });

        setSuccessMessage("Member updated successfully.");
      } else {
        await api.post("/members", {
          name,
          email,
          phone,
        });

        setSuccessMessage("Member added successfully.");
      }

      clearForm();
      loadMembers();
    } catch {
      setError("Operation failed.");
    }
  };

  const handleEdit = (member) => {
    setEditingId(member.memberId);
    setName(member.name);
    setEmail(member.email);
    setPhone(member.phone || "");

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this member?")) return;

    try {
      await api.delete(`/members/${id}`);

      setSuccessMessage("Member deleted successfully.");

      loadMembers();
    } catch {
      setError("Unable to delete member.");
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Members</h1>

      <div className="bg-white p-6 rounded-xl shadow mb-6">
        <h2 className="text-xl font-semibold mb-4">
          {editingId ? "Update Member" : "Add Member"}
        </h2>

        <form
          onSubmit={handleSubmit}
          className="grid md:grid-cols-4 gap-3 items-end"
        >
          {error && (
            <p className="md:col-span-4 text-red-600 bg-red-100 p-2 rounded">
              {error}
            </p>
          )}

          {successMessage && (
            <p className="md:col-span-4 text-green-600 bg-green-100 p-2 rounded">
              {successMessage}
            </p>
          )}

          <div>
            <label>Name</label>

            <input
              type="text"
              className="w-full border p-2 rounded mt-1"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div>
            <label>Email</label>

            <input
              type="email"
              className="w-full border p-2 rounded mt-1"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label>Phone</label>

            <input
              type="text"
              className="w-full border p-2 rounded mt-1"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <div className="flex gap-2">
            <button
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
            >
              {editingId ? "Update" : "Add"}
            </button>

            {editingId && (
              <button
                type="button"
                onClick={clearForm}
                className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
              >
                Cancel
              </button>
            )}
          </div>
        </form>
      </div>

      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by ID or Name..."
          className="w-full md:w-80 border p-2 rounded"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="bg-white rounded-xl shadow overflow-hidden">
        {loading ? (
          <div className="p-6 text-center">Loading...</div>
        ) : (
          <table className="w-full">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-3 text-left">ID</th>
                <th className="p-3 text-left">Name</th>
                <th className="p-3 text-left">Email</th>
                <th className="p-3 text-left">Phone</th>
                <th className="p-3 text-left">Actions</th>
              </tr>
            </thead>

            <tbody>
              {filteredMembers.length === 0 ? (
                <tr>
                  <td
                    colSpan="5"
                    className="text-center p-5 text-gray-500"
                  >
                    No members found.
                  </td>
                </tr>
              ) : (
                filteredMembers.map((member) => (
                  <tr
                    key={member.memberId}
                    className="border-t hover:bg-gray-50"
                  >
                    <td className="p-3">{member.memberId}</td>

                    <td className="p-3">{member.name}</td>

                    <td className="p-3">{member.email}</td>

                    <td className="p-3">
                      {member.phone || "-"}
                    </td>

                    <td className="p-3 space-x-3">
                      <button
                        onClick={() => handleEdit(member)}
                        className="text-blue-600 hover:underline"
                      >
                        Edit
                      </button>

                      <button
                        onClick={() => handleDelete(member.memberId)}
                        className="text-red-600 hover:underline"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default Members;