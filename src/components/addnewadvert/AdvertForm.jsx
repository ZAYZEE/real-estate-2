import React, { Component, Fragment } from "react";

export default class AdvertForm extends Component {
  render() {
    return (
      <Fragment>
        <form onSubmit={this.props.submitNewAdvert}>
          <input
            type="text"
            name="description"
            value={this.props.formValues.description}
            onChange={this.props.handleChange}
            placeholder="Description"
            required
          />
          <br />
          <button
            type="button"
            onClick={() => this.props.forRentForSale("sale")}
          >
            For Sale
          </button>
          <button
            type="button"
            onClick={() => this.props.forRentForSale("rent")}
          >
            For Rent
          </button>
          <br />
          <label htmlFor="price">Price: </label>
          <input
            type="number"
            name="price"
            min="1"
            step="1"
            value={this.props.formValues.price}
            onChange={this.props.handleChange}
            required
          />
          {this.props.formValues.isForSale
            ? "EUR"
            : this.props.formValues.isForRent
            ? "EUR/month"
            : ""}
          <br />
          <input
            type="text"
            name="address"
            value={this.props.formValues.address}
            onChange={this.props.handleChange}
            placeholder="Address"
            required
          />
          <br />
          <input
            type="text"
            name="postcode"
            value={this.props.formValues.postcode}
            onChange={this.props.handleChange}
            placeholder="Postcode"
            required
          />
          <br />
          <label htmlFor="sqrMeter">Square Meter</label>
          <input
            type="number"
            name="sqrMeter"
            min="1"
            step="1"
            value={this.props.formValues.sqrMeter}
            onChange={this.props.handleChange}
          />
          <br />
          <label htmlFor="cubicMeter">Cubic Meter</label>
          <input
            type="number"
            name="cubicMeter"
            min="1"
            step="1"
            value={this.props.formValues.cubicMeter}
            onChange={this.props.handleChange}
          />
          <br />
          <label htmlFor="numberOfRooms">Number of Rooms</label>
          <input
            type="number"
            name="nrOfRooms"
            min="1"
            step="1"
            value={this.props.formValues.nrOfRooms}
            onChange={this.props.handleChange}
          />
          <br />
          <label htmlFor="numberOfBathrooms">Number of Bathrooms</label>
          <input
            type="number"
            name="nrOfBathrooms"
            min="1"
            step="1"
            value={this.props.formValues.nrOfBathrooms}
            onChange={this.props.handleChange}
          />
          <br />
          <label htmlFor="numberOfFloors">Number of Floors</label>
          <input
            type="number"
            name="nrOfFloors"
            min="1"
            step="1"
            value={this.props.formValues.nrOfFloors}
            onChange={this.props.handleChange}
          />
          <br />
          <label htmlFor="locatedOnFloor">Located on Floor</label>
          <input
            type="number"
            name="locatedOnFloor"
            min="1"
            step="1"
            value={this.props.formValues.locatedOnFloor}
            onChange={this.props.handleChange}
          />
          <br />
          <label htmlFor="monthlyPayment">Monthly Payments</label>
          <input
            type="number"
            name="monthlyContribution"
            min="0"
            step="1"
            value={this.props.formValues.monthlyContribution}
            onChange={this.props.handleChange}
          />
          <br />
          <label htmlFor="cionstructionYear">Construction Year</label>
          <input
            type="number"
            name="constructionYear"
            min="0"
            step="1"
            value={this.props.formValues.constructionYear}
            onChange={this.props.handleChange}
          />
          <br />
          <label htmlFor="renovationYear">Renovation Year</label>
          <input
            type="number"
            name="renovationYear"
            min="0"
            step="1"
            value={this.props.formValues.renovationYear}
            onChange={this.props.handleChange}
          />
          <br />
          <label htmlFor="energyLabel">Energy Label</label>
          <input
            type="text"
            name="energyLabel"
            maxLength="1"
            value={this.props.formValues.energyLabel}
            onChange={this.props.handleChange}
            required
          />
          <br />
          <label htmlFor="heating">Heating</label>
          <input
            type="text"
            name="heating"
            value={this.props.formValues.heating}
            onChange={this.props.handleChange}
          />
          <br />
          <label htmlFor="warmWater">Warm Water</label>
          <input
            type="text"
            name="warmWater"
            value={this.props.formValues.warmWater}
            onChange={this.props.handleChange}
          />
          <br />
          <label htmlFor="storage">Storage</label>
          <input
            type="text"
            name="storage"
            value={this.props.formValues.storage}
            onChange={this.props.handleChange}
          />
          <br />
          <label htmlFor="parking">Parking</label>
          <input
            type="text"
            name="parking"
            value={this.props.formValues.parking}
            onChange={this.props.handleChange}
          />
          <br />
          <input type="submit" value="Add New" />
        </form>
      </Fragment>
    );
  }
}
