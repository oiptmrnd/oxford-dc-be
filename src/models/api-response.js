function ApiResponse(statusCode, data) {
    this.statusCode = statusCode;
    this.data = data;
    
}

module.exports = ApiResponse;