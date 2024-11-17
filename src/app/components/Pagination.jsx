const { ChevronLeft, ChevronRight } = require("lucide-react");

function Pagination({ currentPage, totalPages, paginate }) {
  return (
    <div className="flex items-center space-x-2 justify-center my-4">
      <button
        onClick={() => paginate(currentPage - 1)}
        disabled={currentPage === 1}
        className="p-1 text-[#9CA3AF] disabled:opacity-50 hover:text-[#222222]"
        aria-label="Previous Page"
      >
        <ChevronLeft className="h-4 w-4" />
      </button>
      <div className="text-sm text-[#9CA3AF]">
        Page {currentPage} of {totalPages}
      </div>
      <button
        onClick={() => paginate(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="p-1 text-[#9CA3AF] disabled:opacity-50 hover:text-[#222222]"
        aria-label="Next Page"
      >
        <ChevronRight className="h-4 w-4" />
      </button>
    </div>
  );
}

export default Pagination;
