/* Copyright (c) 2015, Nokia Technologies Ltd.
 * All rights reserved.
 *
 * Licensed under the Nokia High-Efficiency Image File Format (HEIF) License (the "License").
 *
 * You may not use the High-Efficiency Image File Format except in compliance with the License.
 * The License accompanies the software and can be found in the file "LICENSE.TXT".
 *
 * You may also obtain the License at:
 * https://nokiatech.github.io/heif/license.txt
 */

#ifndef SAMPLETABLEBOX_HPP
#define SAMPLETABLEBOX_HPP

#include "bbox.hpp"
#include "bitstream.hpp"
#include "chunkoffsetbox.hpp"
#include "compositionoffsetbox.hpp"
#include "compositiontodecodebox.hpp"
#include "editbox.hpp"
#include "sampledescriptionbox.hpp"
#include "samplegroupdescriptionbox.hpp"
#include "samplesizebox.hpp"
#include "sampletochunkbox.hpp"
#include "sampletogroupbox.hpp"
#include "syncsamplebox.hpp"
#include "timetosamplebox.hpp"

#include <memory>

/**
 * \class SampleTableBox
 * @brief Implements the SampleTableBox which is inherited from Box.
 * @details The SampleTableBox (4CC: "stbl") contains all data that pertains to
 * describing, locating, and timing of the media samples in the track. */
class SampleTableBox : public Box
{
public:
    /** @brief The constructor for SampleTableBox.
     *  @details - Handles initialization of member variables.
     */
    SampleTableBox();

    /** @brief The destructor for SampleTableBox.
     *  @details - Currently does nothing but is defined due to polymorphism.
     */
    virtual ~SampleTableBox() = default;

    SampleTableBox(const SampleTableBox &obj) = delete;

    /** @brief Provides access to a SampleDescriptionBox.
     *  @details - An instance of the SampleDescriptionBox is created upon
     *  instantiating this class. This method provides access to the locally
     *  instantiated SampleDescriptionBox.
     */
    SampleDescriptionBox& getSampleDescriptionBox();

    /** @brief Provides access to a TimeToSampleBox.
     *  @details - An instance of the TimeToSampleBox is created upon
     *  instantiating this class. This method provides access to the locally
     *  instantiated TimeToSampleBox.
     */
    TimeToSampleBox& getTimeToSampleBox();

    /** @brief Set CompositionOffsetBox to SampleTableBox
     */
    void setCompositionOffsetBox(const CompositionOffsetBox& compositionOffsetBox);

    /** @return shared_ptr to CompositionOffsetBox if set, or nullptr */
    std::shared_ptr<const CompositionOffsetBox> getCompositionOffsetBox() const;

    /** @brief Set CompositionToDecodeBox to SampleTableBox
     */
    void setCompositionToDecodeBox(const CompositionToDecodeBox& compositionToDecodeBox);

    /** @brief Set EditBox
     */
    void setEditBox(const EditBox& EditBox);

    /** @return shared_ptr to EditBox if set, or nullptr */
    std::shared_ptr<const EditBox> getEditBox() const;

    /** @return shared_ptr to CompositionToDecodeBox if set, or nullptr */
    std::shared_ptr<const CompositionToDecodeBox> getCompositionToDecodeBox() const;

    /** @brief Set SyncSampleBox to SampleTableBox
     */
    void setSyncSampleBox(const SyncSampleBox& syncSampleBox);

    /** @brief Provides access to a SampleToChunkBox.
     *  @details - An instance of the SampleToChunkBox is created upon
     *  instantiating this class. This method provides access to the locally
     *  instantiated SampleToChunkBox.
     */
    SampleToChunkBox& getSampleToChunkBox();

    /** @brief Provides access to a ChunkOffsetBox.
     *  @details - An instance of the ChunkOffsetBox is created upon
     *  instantiating this class. This method provides access to the locally
     *  instantiated ChunkOffsetBox.
     */
    ChunkOffsetBox& getChunkOffsetBox();

    /** @brief Provides access to a SampleSizeBox.
     *  @details - An instance of the SampleSizeBox is created upon
     *  instantiating this class. This method provides access to the locally
     *  instantiated SampleSizeBox.
     */
    SampleSizeBox& getSampleSizeBox();

    /** Set SampleGroupDescriptionBox.
     */
    void setSampleGroupDescriptionBox(std::unique_ptr<SampleGroupDescriptionBox> sgpd);

    /** @brief Adds a new SampleToGroup into a vector.
     *  @details - This method adds a filled SampleToGroupBox into a vector
     *  held locally.
     */
    SampleToGroupBox& getSampleToGroupBox();

    /** @brief Get SampleToGroup boxes.
     *  @returns Vector of sample group boxes. */
    const std::vector<SampleToGroupBox>& getSampleToGroupBoxes() const;

    /** @brief Get SampleGroupDescription Box of a particular grouping type
     *  @param [in] groupingType Sample grouping type
     *  @returns pointer to the SampleGroupDescriptionBox with the desired grouping type */
    const SampleGroupDescriptionBox* getSampleGroupDescriptionBox(const std::string& groupingType) const;

    /** @brief Creates the bitstream that represents the box in the ISOBMFF file
     *  @param [out] bitstr Bitstream that contains the box data. */
    void writeBox(BitStream& bitstr);

    /** @brief Parses a SampleTableBox bitstream and fills in the necessary member variables
     *  @param [in]  bitstr Bitstream that contains the box data */
    void parseBox(BitStream& bitstr);

private:
    // Mandatory Boxes
    SampleDescriptionBox   mSampleDescriptionBox; ///< Sample description box (mandatory)
    TimeToSampleBox        mTimeToSampleBox; ///< Time-to-sample box (mandatory)
    SampleToChunkBox       mSampleToChunkBox; ///< Sample-to-chunk box (mandatory)
    ChunkOffsetBox         mChunkOffsetBox; ///< Chunk offset box (mandatory)
    SampleSizeBox          mSampleSizeBox; ///< Sample size box (mandatory)

    // Non-Mandatory Boxes
    std::shared_ptr<SyncSampleBox>           mSyncSampleBox; ///< Sync sample box (optional)
    std::shared_ptr<CompositionOffsetBox>    mCompositionOffsetBox; ///< Composition offset box (optional)
    std::shared_ptr<CompositionToDecodeBox>  mCompositionToDecodeBox; ///< Composition to decode box (optional)
    std::shared_ptr<EditBox>                 mEditBox; ///< Edit box (optional)

    std::unique_ptr<SampleGroupDescriptionBox> mSampleGroupDescriptionBox; ///< Pointer to the sample group description box
    std::vector<SampleToGroupBox>            mSampleToGroupBox; ///< Vectory of sample-to-group boxes
};

#endif /* end of include guard: SAMPLETABLEBOX_HPP */

