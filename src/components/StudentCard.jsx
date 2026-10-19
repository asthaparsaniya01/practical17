function StudentCard({ student }) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5
      shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

      <div className="mb-4 flex items-center gap-4">
        <div className="flex h-14 w-14 shrink-0 items-center
          justify-center rounded-full bg-indigo-100 text-xl
          font-bold text-indigo-700">
          {student.name.charAt(0).toUpperCase()}
        </div>

        <div className="min-w-0">
          <h2 className="break-words text-lg font-bold text-gray-800">
            {student.name}
          </h2>

          <p className="text-sm text-gray-500">
            Student ID: {student.id}
          </p>
        </div>
      </div>

      <div className="space-y-3 text-sm">
        <div>
          <p className="font-semibold text-gray-500">Email</p>
          <p className="break-all text-gray-800">
            {student.email}
          </p>
        </div>

        <div>
          <p className="font-semibold text-gray-500">Phone</p>
          <p className="text-gray-800">{student.phone}</p>
        </div>

        <div>
          <p className="font-semibold text-gray-500">City</p>
          <p className="text-gray-800">
            {student.address.city}
          </p>
        </div>

        <div>
          <p className="font-semibold text-gray-500">Company</p>
          <p className="text-gray-800">
            {student.company.name}
          </p>
        </div>
      </div>
    </div>
  );
}

export default StudentCard;