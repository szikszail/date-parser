const { assertDateFormat, assertNotDateFormat, DateFormatAssertionError } = require("../assert");
const { expect } = require("chai");

describe("assert", () => {
    const DATE_FORMAT = "MMMM d, yyyy H a";
    const DATE_MATCH = "March 3, 2020 11 AM";
    const DATE_NOT_MATCH = "Mar 03, 20 1a";
    const DATE_MATCH_HU = "Március 3, 2020 11 AM";

    describe("assertDateFormat", () => {
        it("should fail if no date string is set", () => {
            expect(() => assertDateFormat(null, DATE_FORMAT)).to.throw(TypeError);
        });

        it("should fail if no date format is set", () => {
            expect(() => assertDateFormat(DATE_MATCH)).to.throw(TypeError);
        });

        it("should pass if the date is properly formatted", () => {
            expect(() => assertDateFormat(DATE_MATCH, DATE_FORMAT)).not.to.throw(DateFormatAssertionError);
        });

        it("should fail if the date is not properly formatted", () => {
            expect(() => assertDateFormat(DATE_NOT_MATCH, DATE_FORMAT)).to.throw(DateFormatAssertionError);
        });

        it("should pass if the date is properly formatted with given locale", () => {
            expect(() => assertDateFormat(DATE_MATCH_HU, DATE_FORMAT, { locale: "hu" })).not.to.throw(DateFormatAssertionError);
        });

        it("should pass if the date is properly formatted with ignoreing case", () => {
            expect(() => assertDateFormat(DATE_MATCH.toLowerCase(), DATE_FORMAT, { ignoreCase: true })).not.to.throw(DateFormatAssertionError);
        });
    });

    describe("assertNotDateFormat", () => {
        it("should fail if no date string is set", () => {
            expect(() => assertNotDateFormat(null, DATE_FORMAT)).to.throw(TypeError);
        });

        it("should fail if no date format is set", () => {
            expect(() => assertNotDateFormat(DATE_MATCH)).to.throw(TypeError);
        });

        it("should pass if the date is not properly formatted", () => {
            expect(() => assertNotDateFormat(DATE_NOT_MATCH, DATE_FORMAT)).not.to.throw(DateFormatAssertionError);
        });

        it("should fail if the date is properly formatted", () => {
            expect(() => assertNotDateFormat(DATE_MATCH, DATE_FORMAT)).to.throw(DateFormatAssertionError);
        });

        it("should fail if the date is properly formatted with given locale", () => {
            expect(() => assertNotDateFormat(DATE_MATCH_HU, DATE_FORMAT, { locale: "hu" })).to.throw(DateFormatAssertionError);
        });

        it("should fail if the date is properly formatted with ignoreing case", () => {
            expect(() => assertNotDateFormat(DATE_MATCH.toLowerCase(), DATE_FORMAT, { ignoreCase: true })).to.throw(DateFormatAssertionError);
        });
    });
});