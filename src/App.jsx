import { useEffect, useState } from "react";
import StudentCard from "./components/StudentCard";
import Loading from "./components/Loading";

function App() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchStudents = async () => {
    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );

      if (!response.ok) {
        throw new Error("Failed to fetch student records.");
      }

      const data = await response.json();
      setStudents(data);
    } catch (err) {
      setError(err.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-10 sm:px-6">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <header className="mb-8 text-center">
          <h1 className="text-3xl font-extrabold text-indigo-700 sm:text-4xl">
            Student List
          </h1>

          <p className="mt-2 text-gray-600">
            Student records retrieved from a dummy API
          </p>
        </header>

        {/* Student Count */}
        {!loading && !error && (
          <div className="mb-6 flex items-center justify-between
            rounded-xl bg-white p-4 shadow-sm">
            <span className="font-semibold text-gray-700">
              Total Students
            </span>

            <span className="rounded-full bg-indigo-100 px-4 py-2
              font-bold text-indigo-700">
              {students.length}
            </span>
          </div>
        )}

        {/* Loading State */}
        {loading && <Loading />}

        {/* Error State */}
        {!loading && error && (
          <div className="rounded-xl border border-red-200
            bg-red-50 p-6 text-center">
            <p className="font-semibold text-red-700">
              {error}
            </p>

            <button
              onClick={fetchStudents}
              className="mt-4 rounded-lg bg-red-600 px-5 py-2
                font-semibold text-white hover:bg-red-700"
            >
              Try Again
            </button>
          </div>
        )}

        {/* Student List */}
        {!loading && !error && (
          students.length > 0 ? (
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2
              lg:grid-cols-3 xl:grid-cols-4">
              {students.map((student) => (
                <StudentCard
                  key={student.id}
                  student={student}
                />
              ))}
            </div>
          ) : (
            <div className="rounded-xl bg-white p-10 text-center
              text-gray-600 shadow-sm">
              No student records found.
            </div>
          )
        )}

      </div>
    </div>
  );
}

export default App;