import { timestampConverterService, timestampGeneratorService } from "../services/timestamp.service.js";

const timestampConverterController = (inputDate) => {
    if (inputDate) {
        console.log(inputDate); 
        return timestampConverterService(inputDate);
    }
    return timestampGeneratorService();
};

export default timestampConverterController;