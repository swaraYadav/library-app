function Deletestudent() {
  return (
    <div className="container">
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <p>Are you sure to delete this Details</p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-primary">OK</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Deletestudent;